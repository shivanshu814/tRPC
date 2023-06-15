/** @format */

import {
	Box,
	Button,
	Center,
	Image,
	Text,
	VStack,
	HStack,
} from '@chakra-ui/react';
import React from 'react';

// Define the project data
const projects = [
	{
		name: 'Project 1',
		description: 'Description of Project 1',
		photoUrl: '/project1.jpg',
		githubUrl: 'https://github.com/project1',
		liveDemoUrl: 'https://project1-demo.com',
	},
	{
		name: 'Project 2',
		description: 'Description of Project 2',
		photoUrl: '/project2.jpg',
		githubUrl: 'https://github.com/project2',
		liveDemoUrl: 'https://project2-demo.com',
	},
	{
		name: 'Project 2',
		description: 'Description of Project 2',
		photoUrl: '/project2.jpg',
		githubUrl: 'https://github.com/project2',
		liveDemoUrl: 'https://project2-demo.com',
	},
	{
		name: 'Project 2',
		description: 'Description of Project 2 ',
		photoUrl: '/project2.jpg',
		githubUrl: 'https://github.com/project2',
		liveDemoUrl: 'https://project2-demo.com',
	},
	// Add more projects here...
];

const ProjectPage: React.FC = () => {
	return (
		<VStack spacing={8}>
			{projects.map((project, index) => (
				<Box
					key={index}
					maxW='25xl'
					borderWidth='0'
					borderRadius='lg'
					overflow='hidden'
					boxShadow='base'
					_hover={{ boxShadow: 'lg' }}>
					<HStack>
						<Image
							src={project.photoUrl}
							alt={project.name}
							w='700px'
							h='700px'
						/>
						<Box p={8}>
							<Text fontWeight='bold' fontSize='2xl'>
								{project.name}
							</Text>
							<Text mt={4}>{project.description}</Text>
							<Center mt={8}>
								<Button
									as='a'
									href={project.githubUrl}
									target='_blank'
									colorScheme='teal'
									mr={4}
									size='lg'>
									GitHub
								</Button>
								<Button
									as='a'
									href={project.liveDemoUrl}
									target='_blank'
									colorScheme='teal'
									size='lg'>
									Live Demo
								</Button>
							</Center>
						</Box>
					</HStack>
				</Box>
			))}
		</VStack>
	);
};

export default ProjectPage;
