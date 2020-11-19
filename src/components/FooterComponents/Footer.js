import React from "react"
import MailchimpForm from "../MailchimpForm"
import { Text, Box, Link } from "@chakra-ui/core"

import { GiRss } from "react-icons/gi"
const Footer = () => {
  return (
    <Box mt="5rem">
      <MailchimpForm />
      <Text
        textAlign="center"
        color="white"
        paddingTop="1.5rem"
        paddingBottom="1rem"
      >
        © 2020 ECN
        <Link
        ml="1rem"
          mt="1rem"
          href="https://ecnn.netlify.app/rss.xml"
          color="#fff"
          isExternal
          display="inline-block"
        >
          <GiRss style={{ color: "#ee771c", display: "inline",marginBottom:"0.4rem" }} />
          <span style={{color:"#999"}}> RSS Feed </span>
        </Link>
      </Text>
    </Box>
  )
}

export default Footer
