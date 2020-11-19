import React from "react"
import { Heading, PseudoBox, Text, AspectRatioBox, Box } from "@chakra-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Paper from "@material-ui/core/Paper"
import Draggable from "react-draggable"
import BackgroundImage from "gatsby-background-image"
import videoModule from "../videoCompound/videoDevelopPage.module.css"
import { motion } from "framer-motion"

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

const VideoDialog = ({ data }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

    // 1. Create a custom motion component from Box
    const MotionBox = motion.custom(Box)

  return (
    <div>
      <PseudoBox
        w={["100%", "100%", "20.3vw", "30vw"]}
        mx="auto"
        mt=""
        _hover={{ color: " #6873e5" }}
        onClick={handleClickOpen}
        
      >
        <BackgroundImage
          Tag="section"
          style={{ height: "40vh" }}
          className={videoModule.aaa}
          fluid={data.cover.childImageSharp.fluid}
          backgroundColor={`#fff`}
        >
           <Box
            style={{
              background:
                "linear-gradient(rgba(38, 37, 90, 0) 0%, rgba(38, 37, 90, 0.8) 100%)",
            }}
            height="100%"
            w="100%"
          >
          <MotionBox
           position="relative"
           whileHover={{ scale: 0.97 }}
            height="100%"
            px={["5vw", 0, 0, 0]}
            w="100%"
          >
            {/* <AiOutlinePlayCircle style={{color:"white", fontSize:"5rem",position:"absolute",left:"1vw",bottom:"12vh"}}/> */}
            <i class="iconfont icon-iconset0481" style={{color:"white", fontSize:"5rem",position:"absolute",left:"1.5vw",bottom:"12vh"}} ></i>
            <Text
             bottom="3vh"
             left="2vw"
              position="absolute"
              // w={["100%", "100%","30vw","30vw"]}
              color="#aaa"
              fontWeight="700"
              fontSize="0.5rem"
              lineHeight="1.3rem"
            >
              {data.date}
            </Text>

            <PseudoBox
             bottom="5vh"
             left="2vw"
              position="absolute"
              _hover={{ color: " #6873e5" }}
              mb="12px"
              fontWeight="900"
              fontFamily="NotoSansSC-Medium"
              color="#fff"
              cursor="pointer"
            >
              <Heading mb="12px" fontSize="1.3rem" mt={"1.2rem"}>
                {data.title}
              </Heading>
            </PseudoBox>
          </MotionBox>
          </Box>
        </BackgroundImage>
      </PseudoBox>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {data.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <AspectRatioBox
              width={["300px", "460px", "560px", "1200px"]}
              h="90vh"
              ratio={1}
              p="0px"
            >
              <Box
                as="iframe"
                allowFullScreen="true"
                framespacing="0"
                frameborder="no"
                border="0"
                scrolling="no"
                src={data.videoSource}
              />
            </AspectRatioBox>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default VideoDialog
