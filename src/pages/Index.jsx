import { Box, Container, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        {/* Header */}
        <Box as="header" bg="blue.500" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="lg" textAlign="center">PhotoShare</Heading>
        </Box>

        {/* Main Content Area */}
        <Box as="main" flex="1" p={4}>
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
            {/* Example Photos */}
            <GridItem w="100%" h="200px" bg="gray.200" borderRadius="md" />
            <GridItem w="100%" h="200px" bg="gray.200" borderRadius="md" />
            <GridItem w="100%" h="200px" bg="gray.200" borderRadius="md" />
            <GridItem w="100%" h="200px" bg="gray.200" borderRadius="md" />
          </Grid>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="blue.500" color="white" p={4} borderRadius="md" textAlign="center">
          <Text>&copy; 2023 PhotoShare. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;