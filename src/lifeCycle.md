#React Lifecycle:
// 3stage - Mount, Update, Unmount

Mount-

#constructor(props),
-initialise the variable

#getDerivedStateFromProps(nextProps, nextState),
-updated props will pass and new state will generate

#render(),
-render the component on web page

#componentDidMount()
-run after the component is rendered on the web page

Update-

#getDerivedStateFromProps(props, state),

- take updated props and generate new State

#shouldComponentUpdate(nextProps, nextState),
-check whether we have to update the element or not
-return true if yes else false

#render(),
-render the component on the website

#getSnapShotBeforeUpdate(prevProps, prevState),
-use to store the old state of the component for future use

#componentDidUpdate(props)
-run when component is updated

Unmount-

#componentWillUnmount()
