import React, { Component } from 'react'
import PropTypes from 'prop-types'

const isBrowser = typeof window !== 'undefined'

function isLoaded () {
  return (
      isBrowser &&
      typeof window.grecaptcha !== 'undefined'
  )
}

function isReady () {
  return isLoaded() &&
      typeof window.grecaptcha.execute === 'function'
}

class ReCaptcha extends Component {
  static propTypes = {
    verifyCallback: PropTypes.func.isRequired,
    sitekey: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this._updateReadyState =
        this._updateReadyState.bind(this)

    this._setReady =
        this._setReady.bind(this)

    this.state = {
      ready: isReady()
    }

    if (isBrowser) {
      this.readyCheck = this.state.ready
          ? null
          : window.setInterval(
              this._updateReadyState,
              isLoaded() ? 0 : 1000
          )
    }
  }

  componentDidMount () {
    if (this.state.ready) {
      this.execute()
    }
  }

  componentDidUpdate (_, prevState) {
    if (
        this.state.ready &&
        !prevState.ready
    ) {
      this.execute()
    }
  }

  componentWillUnmount () {
    if (this.readyCheck !== null) {
      clearInterval(this.readyCheck)
    }
  }

  execute () {
    const {
      sitekey,
      verifyCallback,
      action
    } = this.props

    window.grecaptcha.execute(sitekey, { action })
        .then(verifyCallback)
  }

  _setReady () {
    this.setState(
        () => ({ ready: true })
    )
  }

  _updateReadyState () {
    if (isLoaded()) {
      window.grecaptcha.ready(
          this._setReady
      )

      clearInterval(this.readyCheck)
      this.readyCheck = null
    }
  }

  render () {
    return <></>
  }
}

export default ReCaptcha
