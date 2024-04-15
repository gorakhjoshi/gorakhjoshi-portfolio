import { Alert, Box, chakra, DarkMode, Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import { useSubscribeForm } from 'lib/use-subscribe-form';

function Feedback({ state, message }) {
  if (state === 'error') {
    return (
      <DarkMode>
        <Alert role="status" status="error" rounded="md" variant="left-accent" color="white" mt="5">
          {message}
        </Alert>
      </DarkMode>
    );
  }

  if (state === 'success') {
    return (
      <DarkMode>
        <Alert
          role="status"
          status="success"
          rounded="md"
          variant="left-accent"
          color="white"
          mt="5"
        >
          {message}
        </Alert>
      </DarkMode>
    );
  }

  return null;
}

export default function SubscribeForm() {
  const form = useSubscribeForm();
  return (
    <Box maxWidth="42rem" py="vGutter">
      <Heading marginBottom="4" size="2xl" letterSpacing="tight">
        Stay up to date
      </Heading>

      <Text maxW="32rem" fontSize="lg">
        Get emails from me about web development, tech, and early access to new projects.
      </Text>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await form.submit();
        }}
      >
        <Flex gap="4" marginTop="8" direction={{ base: 'column', md: 'row' }}>
          <chakra.input
            required
            ref={form.inputRef}
            flex="1"
            paddingX="6"
            autoComplete="email"
            paddingY="5"
            name="email"
            aria-label="Enter your email address"
            bg="gray.800"
            rounded="lg"
            placeholder="you@email.com"
            _placeholder={{ color: 'whiteAlpha.400' }}
          />
          <chakra.button
            minW="10.8rem"
            type="submit"
            aria-label="Enter your email address"
            fontWeight="bold"
            letterSpacing="wide"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            textTransform="uppercase"
            color="black"
            paddingX="10"
            paddingY="5"
            rounded="lg"
            transition="background 0.2s ease-in-out"
            bg="brown.600"
            _hover={{ bg: 'brown.700' }}
            _active={{ bg: 'brown.800' }}
          >
            {form.state === 'loading' ? <Spinner size="md" /> : 'Subscribe'}
          </chakra.button>
        </Flex>
      </form>
      <Feedback state={form.state} message={form.message} />
    </Box>
  );
}
