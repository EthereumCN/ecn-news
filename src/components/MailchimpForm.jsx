import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Input, Button, Box } from "@chakra-ui/core"

export default class MyGatsbyComponent extends React.Component {
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).
  constructor() {
    super()
    this.state = { email: "", result: { result: null } }
  }

  // 2. via `async/await`
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ result: result })
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <>
        <form
          onSubmit={this._handleSubmit}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Input
            border="0"
            display="inline-block"
            w="300px"
            label="Email"
            type="email"
            name="email"
            variant="outline"
            placeholder="your@mail"
            autoComplete="email"
            onChange={this.handleChange}
          />
          <Box display="flex" flexDir="column">
            {/* <Button
            ml="0.8rem"
              _active={{ bg: "#ee771c" }}
              leftIcon="email"
              _hover={{ bg: "#ee771c" }}
              backgroundColor="#ee771c"
              color="#fff"
              variant="solid"
              label="Submit"
              type="submit"
            >
              {this.state.result.result === "success"
                ? "订阅成功"
                : this.state.result.result === "error"
                ? "已订阅"
                : this.state.result.result === null
                ? " 订阅"
                : "请再点一次"}
            </Button> */}

            {this.state.result.result === "success" ? (
              <Button
                ml="0.8rem"
                _active={{ bg: "rgba(238,119,28,0.8)" }}
                leftIcon="check"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="rgba(238,119,28,0.8)"
                color="#fff"
                variant="solid"
                label="Submit"
                type="submit"
              >
                {" "}
                订阅成功
              </Button>
            ) : this.state.result.result === "error" ? (
              <Button
                ml="0.8rem"
                _active={{ bg: "rgba(238,119,28,0.8)" }}
                leftIcon="warning-2"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="rgba(238,119,28,0.8)"
                color="#fff"
                variant="solid"
                label="Submit"
                type="submit"
              >
                {" "}
                已订阅
              </Button>
            ) : this.state.result.result === null ? (
              <Button
                ml="0.8rem"
                _active={{ bg: "#ee771c" }}
                leftIcon="email"
                _hover={{ bg: "rgba(238,119,28,0.8)" }}
                backgroundColor="#ee771c"
                color="#fff"
                variant="solid"
                label="Submit"
                type="submit"
              >
                {" "}
                订阅
              </Button>
            ) : (
              "请再点一次"
            )}
          </Box>
        </form>
      </>
    )
  }
}
