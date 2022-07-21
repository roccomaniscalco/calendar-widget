import { func, node } from "prop-types"
import React from "react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.props.onCatch(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: node,
  fallback: node,
  onCatch: func,
}
ErrorBoundary.defaultProps = {
  fallback: "Oops! something went wrong.",
  onCatch: () => {},
}
