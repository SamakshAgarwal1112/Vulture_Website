import { Box, Flex, Link, Text, Stack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Box bg="gray.900" color="white" py="4" pt={'20px'} h={'150px'}>
      <Flex
        justify="space-between"
        align="center"
        maxW="6xl"
        mx="auto"
        pt={'20px'}
      >
        <Stack gap={'30px'}>
          <Text fontSize="md" fontWeight="bold">
            © {new Date().getFullYear()} VulTURE
          </Text>
          <Text fontSize="md">
            <span style={{ color: '#f3d340' }}>Vul</span>nerability{' '}
            <span style={{ color: '#f3d340' }}>T</span>esting{' '}
            <span style={{ color: '#f3d340' }}>U</span>nderstanding and{' '}
            <span style={{ color: '#f3d340' }}>R</span>esponse{' '}
            <span style={{ color: '#f3d340' }}>E</span>ngine
          </Text>
        </Stack>
        <Box>
          <Link href="https://www.github.com/" className="social-link">
            <FontAwesomeIcon icon={faGithub} fontSize="50px" />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
