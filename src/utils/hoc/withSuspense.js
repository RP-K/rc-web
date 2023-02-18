import { Component, Suspense } from "react";

const withSuspense = (WrappedComponent) => {
  class ComponentWithSuspense extends Component {
    render() {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <WrappedComponent {...this.props} />
        </Suspense>
      );
    }
  }
  return ComponentWithSuspense;
};

export default withSuspense;
