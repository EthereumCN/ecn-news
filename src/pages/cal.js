import React, { useState } from "react"
import { Flex, Box, Heading } from "@chakra-ui/core"

const Ecosystem = () => {
  const [ta, setTa] = useState(true)
  const [tb, setTb] = useState(true)
  const [tc, setTc] = useState(false)
  const [td, setTd] = useState(false)

  function setAllToFalse() {
    setTb(false)
    setTc(false)
    setTd(false)
  }

  return (
    <Box>
      {/* 盒子 */}
      <Box>
        <Box
          p="3px"
          display="inline-box"
          border={ta ? "1px solid #ff6f00" : "1px solid #fff"}
          cursor="pointer"
          color={ta ? "#ff6f00" : "#fff"}
          onClick={() => {
            setTa(true)
          }}
        >
          2020
        </Box>

        <Box
          ml="1rem"
          p="3px"
          display="inline-box"
          border={ta ? "1px solid #fff" : "1px solid #ff6f00"}
          cursor="pointer"
          color={ta ? "#fff" : "#ff6f00"}
          onClick={() => {
            setTa(false)
          }}
        >
          2021
        </Box>

        {ta ? (
          <Box>
            <Flex color="#fff" flexWrap="wrap" w="200px" mt="1rem">
              <Box p="3px" display="inline-box" cursor="pointer">
                1月
              </Box>
              <Box
                p="3px"
                paddingX="50px"
                display="inline-box"
                cursor="pointer"
                id="1"
                onClick={() => {
                  setAllToFalse()
                  setTb(true)
                }}
              >
                <Flex flexDirection="column" position="relative">
                  2月
                  <i
                    class="iconfont icon-dot1"
                    style={{
                      position: "absolute",
                      bottom: "-12px",
                      color: "#ff6f00",
                      left:"3px"
                    }}
                  ></i>
                </Flex>
              </Box>
              <Box p="3px" display="inline-box" cursor="pointer">
                3月
              </Box>
              <Box p="3px" display="inline-box" cursor="pointer">
                4月
              </Box>
              <Box
                p="3px"
                paddingX="50px"
                display="inline-box"
                cursor="pointer"
              >
                5月
              </Box>
              <Box p="3px" display="inline-box" cursor="pointer">
                6月
              </Box>
              <Box p="3px" display="inline-box" cursor="pointer">
                7月
              </Box>
              <Box
                p="3px"
                paddingX="50px"
                display="inline-box"
                cursor="pointer"
              >
                8月
              </Box>
              <Box
                p="3px"
                display="inline-box"
                cursor="pointer"
                onClick={() => {
                  setAllToFalse()
                  setTc(true)
                }}
              >
                <Flex flexDirection="column" position="relative">
                  9月
                  <i
                    class="iconfont icon-dot1"
                    style={{
                      position: "absolute",
                      bottom: "-12px",
                      color: "#ff6f00",
                      left:"3px"
                    }}
                  ></i>
                </Flex>
              </Box>
              <Box
                p="3px"
                display="inline-box"
                cursor="pointer"
                onClick={() => {
                  setAllToFalse()
                  setTd(true)
                }}
              >
                <Flex flexDirection="column" position="relative">
                  10月
                  <i
                    class="iconfont icon-dot1"
                    style={{
                      position: "absolute",
                      bottom: "-12px",
                      color: "#ff6f00",
                      left:"10px"
                    }}
                  ></i>
                </Flex>
              </Box>
              <Box
                p="3px"
                paddingX="38px"
                display="inline-box"
                cursor="pointer"
              >
                11月
              </Box>
              <Box p="3px" display="inline-box" cursor="pointer">
                12月
              </Box>
            </Flex>

            {/* 月历选择 */}

            <Box mt="2rem">
              {tb ? (
                <Box color="#fff">
                  <img src="https://gblobscdn.gitbook.com/assets%2F-LpXMJ2UtB5ZJjI4I8qn%2F-LrXADjuJacTjiVVNmOT%2F-LrXBPCPA8nHetypVBgW%2F%E5%9B%BE%E7%89%872.png?alt=media&token=e318b42b-9845-43c9-b594-f81a309b1392" />
                </Box>
              ) : null}
              {tc ? (
                <Box color="#fff">
                  <img src="https://gblobscdn.gitbook.com/assets%2F-LpXMJ2UtB5ZJjI4I8qn%2F-LrXADjuJacTjiVVNmOT%2F-LrXCNjZvPe6LlT6gabi%2F%E5%9B%BE%E7%89%874.png?alt=media&token=145bd2ac-4d81-4b57-b1e0-33d5db974333" />
                </Box>
              ) : null}
              {td ? (
                <Box color="#fff">
                  <img src="https://gblobscdn.gitbook.com/assets%2F-LpXMJ2UtB5ZJjI4I8qn%2F-LrXADjuJacTjiVVNmOT%2F-LrXCTkdfzKm-Grfh2bY%2F%E5%9B%BE%E7%89%876.png?alt=media&token=df8c11d9-e750-4609-8cf7-9bb1c95d315f" />
                </Box>
              ) : null}
            </Box>
          </Box>
        ) : (
          <Flex color="#fff" flexWrap="wrap" w="200px" mt="1rem">
            <Box p="3px" display="inline-box" cursor="pointer">
              1月
            </Box>
            <Box p="3px" paddingX="50px" display="inline-box" cursor="pointer">
              2月
            </Box>
            <Box p="3px" display="inline-box" cursor="pointer">
              3月
            </Box>
            <Box p="3px" display="inline-box" cursor="pointer">
              4月
            </Box>
            <Box p="3px" paddingX="50px" display="inline-box" cursor="pointer">
              5月
            </Box>
            <Box p="3px" display="inline-box" cursor="pointer">
              6月
            </Box>
            <Box p="3px" display="inline-box" cursor="pointer">
              7月
            </Box>
            <Box p="3px" paddingX="50px" display="inline-box" cursor="pointer">
              8月
            </Box>
            <Box p="3px" display="inline-box" cursor="pointer">
              9月
            </Box>
            <Box p="3px" display="inline-box" cursor="pointer">
              10月
            </Box>
            <Box p="3px" paddingX="38px" display="inline-box" cursor="pointer">
              11月
            </Box>
            <Box p="3px" display="inline-box" cursor="pointer">
              12月
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export default Ecosystem
