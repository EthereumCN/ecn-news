import React, { useState } from "react"
import { Box, PseudoBox, Heading, Text } from "@chakra-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
// 底部
import Footer from "../components/FooterComponents/Footer"
import { motion } from "framer-motion"
import Img from "gatsby-image"

// 弹窗
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Paper from "@material-ui/core/Paper"
import Draggable from "react-draggable"

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

const Ecosystem = () => {
  // 1. Create a custom motion component from Box
  const MotionBox = motion.custom(Box)

  // 弹窗显示
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // 获取数据

  const data = useStaticQuery(graphql`
    {
      allStrapiCalendars(sort: { order: ASC, fields: date }) {
        nodes {
          event_name
          date(formatString: "YYYY.MM")
          location
          event_picture {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Box>
      <Layout>
        {console.log(data.allStrapiCalendars.nodes)}
        <SEO title="生态漫游" />
        <Box mt="2rem">
          <MotionBox
            borderRadius="10px"
            w="264px"
            h="320px"
            bg="white"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClickOpen}
          >
            <PseudoBox
              h="150px"
              w="264px"
              borderTopLeftRadius="10px"
              borderTopRightRadius="10px"
            >
              <Img
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
                fluid={
                  data.allStrapiCalendars.nodes[0].event_picture.childImageSharp
                    .fluid
                }
              />
            </PseudoBox>
            <PseudoBox mt="2rem">
              <Heading
                color="rgb(31, 41, 79)"
                textAlign="center"
                fontSize="1.5rem"
              >
                {data.allStrapiCalendars.nodes[0].event_name}
              </Heading>
              <Text
                color="rgba(31, 41, 79, 0.5)"
                marginY="0.5rem"
                textAlign="center"
              >
                {data.allStrapiCalendars.nodes[0].date}
              </Text>
              <Heading
                w="80%"
                margin="0 auto"
                h="36px"
                lineHeight="36px"
                borderRadius="18px"
                backgroundColor="rgba(38, 37, 90, 0.1)"
                color="rgba(38, 37, 90, 0.5)"
                textAlign="center"
                fontSize="1.5rem"
              >
                立即参与
              </Heading>
            </PseudoBox>
          </MotionBox>
        </Box>
      </Layout>
      <Footer />

      {/* 隐藏的弹窗 */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          活动详情
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "white" }}>
            <PseudoBox
              h="80vh"
              w="80vw"
            >
              <Img
                fluid={
                  data.allStrapiCalendars.nodes[0].event_picture.childImageSharp
                    .fluid
                }
              />
            </PseudoBox>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default Ecosystem
