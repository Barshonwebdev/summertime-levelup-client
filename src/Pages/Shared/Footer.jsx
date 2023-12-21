import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo/logo.png'
import { Box, Heading, Flex, List, ListItem, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="black"
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
    >
      <Box
        maxW=""
        marginX="auto"
        pb="2rem"
        mb="1.5rem"
        px={10}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex flexWrap="wrap" alignItems="start" justifyContent="space-between">
          <img src={logo} className="w-64" alt="" />

          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="orange.500"
              mt="1rem"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Summertime LevelUp
            </Heading>
            <List lineHeight="2" justifyContent="center">
              <LinkItem text="Careers" />
              <LinkItem text="News" />
              <LinkItem text="Policies" />
              <LinkItem text="Help" />
              <LinkItem text="Diversity & Belonging" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="orange.500"
              mt="1rem"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Discover
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Trust &amp; Safety" />
              <LinkItem text=" Credit" />
              <LinkItem text="Gift Cards" />
              <LinkItem text="Membership" />
              <LinkItem text="Facilities" />
              <LinkItem text="Things To Do" isTag={true} tagText="New" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Heading
              as="h5"
              color="orange.500"
              mt="1rem"
              mb="0.5rem"
              fontSize="0.875rem"
              fontWeight="600"
            >
              Hosting
            </Heading>
            <List lineHeight="2">
              <LinkItem text="Why Host" />
              <LinkItem text="Hospitality" />
              <LinkItem text="Responsible Hosting" />
              <LinkItem text="Events" />
              <LinkItem text="Host an Experience" isTag={true} tagText="New" />
              <LinkItem text="Open Homes" />
              <LinkItem text="Donations" isTag={true} tagText="New" />
            </List>
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "max-content" }}
            mb={{ base: "1.5rem", lg: "0" }}
          >
            <Flex justifyContent="start" mb="0.5rem" alignItems="baseline">
              <Link href="#" mr="1rem">
                <FaFacebook className="text-2xl text-cyan-600"></FaFacebook>
              </Link>
              <Link href="#" mr="1rem">
                <FaInstagram className="text-2xl text-cyan-600"></FaInstagram>
              </Link>
              <Link href="#" mr="1rem">
                <FaTwitter className="text-2xl text-cyan-600"></FaTwitter>
              </Link>
            </Flex>
            <List lineHeight="2" >
              <LinkItem text="Terms" />
              <LinkItem text="Privacy" />
              <LinkItem text="Site Map" />
            </List>
          </Box>
        </Flex>
      </Box>
      <p className="text-center text-yellow-500 text-lg">
        &copy; 2023 Summertime LevelUp, Inc.
      </p>
    </Box>
  );
};



const LinkItem = ({ text, isTag = false, tagText }) => {
  return (
    <ListItem display="flex">
      <Link
        fontWeight="600"
        href="#"
        color="orange.700"
        _hover={{ color: 'green.600' }}
      >
        {text}
      </Link>
      {isTag && (
        <Text
          as="span"
          bg="#008F94"
          px="0.25rem"
          display="inline-flex"
          alignItems="center"
          color="#fff"
          height="1.25rem"
          borderRadius="0.25rem"
          ml="0.25rem"
          mt="0.25rem"
          fontSize="0.75rem"
        >
          {tagText}
        </Text>
      )}
    </ListItem>
  );
};

export default Footer;

