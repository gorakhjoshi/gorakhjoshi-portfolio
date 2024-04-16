import { allProjects } from 'contentlayer/generated';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import Emoji from 'components/emoji';
import MDXComponents from 'components/mdx-components';
import ProjectCard from 'components/project-card';
import SEO from 'components/seo';

export default function ProjectPage() {
  return (
    <Container>
      <SEO title="Projects" />
      <Box py="vGutter">
        <Box>
          <Heading as="h1" size="3xl" marginBottom="6" color="white">
            Projects
          </Heading>
          <Stack fontSize="lg" maxW="60ch" spacing="4">
            <Text>Here are some projects I've worked on that I think are worth mentioning.</Text>
          </Stack>
        </Box>

        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
