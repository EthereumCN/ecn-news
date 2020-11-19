import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  Spinner,
  Link,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PseudoBox,
  Box,
} from "@chakra-ui/core"
import { Ri24HoursLine } from "react-icons/ri"
import StatModule from './Stat.module.css'



const Stats = () => {
  const [data, setData] = useState(0)

  let rate = Math.round(data.usd_24h_change * 100) / 100

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true"
      )

      setData(result.data.ethereum)
    }

    fetchData()
  }, [])

  return (
    <Stat  color="#fff"  mt="0.5rem" className={StatModule.onebox}>
      <StatLabel fontSize="1rem">
        {data === 0 ? (
          <Spinner size="sm" textAlign="left"/>
        ) : (
          <>
            {data.usd} &nbsp;
            <StatArrow
              type={rate >= 0 ? "increase" : "decrease"}
              fontSize="0.5rem"
            />{" "}
            <>
              <Box as="span"> {rate + "%"} </Box>
              <Ri24HoursLine style={{ display: "inline" }} />
            </>{" "}
          </>
        )}
      </StatLabel>
      <StatNumber fontSize="0.8rem" color="rgba(238, 119, 28, 0.65)" >
        ETH&nbsp;(USD){" "}
        <Popover placement="top-start">
          <PopoverTrigger>
            <PseudoBox as="button" outline="rgba(26, 32, 44, 1.000)">
              <Icon name="info-outline" mx="2px" />
            </PseudoBox>
          </PopoverTrigger>
          <PopoverContent
            zIndex={4}
            _focus={{ boxShadow: "0" }}
            boxShadow="0"
            borderWidth="0"
            outline="rgba(26, 32, 44, 1.000)"
          >
            <PopoverArrow backgroundColor="rgba(26, 32, 44, 1.000)" />
            <PopoverBody backgroundColor="rgba(26, 32, 44, 1.000)">
              Data provided by CoinGecko
              <Link href="https://www.coingecko.com/" isExternal>
                <Icon name="external-link" mx="2px" />
              </Link>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </StatNumber>
    </Stat>
  )
}

export default Stats
