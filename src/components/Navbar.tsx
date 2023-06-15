/** @format */

import {
	Box,
	Flex,
	Link,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ProjectPage from '~/pages/project';
const Navbar = () => {
	const isMobile = useBreakpointValue({ base: true, lg: false });

	return (
		<Flex
			as='nav'
			align='center'
			justify='center'
			position='fixed'
			top={10}
			left={20}
			right={20}
			zIndex={10}
			py={2}
			_before={{
				content: '""',
				position: 'absolute',
				top: -5,
				left: 10,
				right: 10,
				bottom: -5,
				bg: 'linear-gradient(to right, rgba(210, 20, 210, 0.8), rgba(255, 107, 107, 0.8))',
				borderRadius: '50%/100% 50%',
				zIndex: -1,
			}}>
			{isMobile ? (
				<Menu>
					<MenuButton as={Box} p={2}>
						<HamburgerIcon color='white' />
					</MenuButton>
					<MenuList bg='teal.500' color='white' borderRadius='md'>
						<MenuItem>
							<Link href='/project' _hover={{ textDecoration: 'none' }}>
								<Text
									color='white'
									fontSize='lg'
									fontWeight='bold'
									px={4}
									py={2}
									transition='background 0.3s ease'
									_hover={{ bg: 'teal.500' }}>
									Projects
								</Text>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link href='#internships' _hover={{ textDecoration: 'none' }}>
								<Text
									color='white'
									fontSize='lg'
									fontWeight='bold'
									px={4}
									py={2}
									transition='background 0.3s ease'
									_hover={{ bg: 'teal.500' }}>
									Internships
								</Text>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link href='#achievements' _hover={{ textDecoration: 'none' }}>
								<Text
									color='white'
									fontSize='lg'
									fontWeight='bold'
									px={4}
									py={2}
									transition='background 0.3s ease'
									_hover={{ bg: 'teal.500' }}>
									Achievements
								</Text>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link href='#certifications' _hover={{ textDecoration: 'none' }}>
								<Text
									color='white'
									fontSize='lg'
									fontWeight='bold'
									px={4}
									py={2}
									transition='background 0.3s ease'
									_hover={{ bg: 'teal.500' }}>
									Certifications
								</Text>
							</Link>
						</MenuItem>
					</MenuList>
				</Menu>
			) : (
				<Flex>
					<Link href='/project' _hover={{ textDecoration: 'none' }}>
						<Text
							color='white'
							fontSize='lg'
							fontWeight='bold'
							px={4}
							py={2}
							borderRadius='md'
							transition='background 0.3s ease'
							_hover={{ bg: 'teal.500' }}>
							Projects
						</Text>
					</Link>
					<Link href='#internships' _hover={{ textDecoration: 'none' }}>
						<Text
							color='white'
							fontSize='lg'
							fontWeight='bold'
							px={4}
							py={2}
							borderRadius='md'
							transition='background 0.3s ease'
							_hover={{ bg: 'teal.500' }}>
							Internships
						</Text>
					</Link>
					<Link href='#achievements' _hover={{ textDecoration: 'none' }}>
						<Text
							color='white'
							fontSize='lg'
							fontWeight='bold'
							px={4}
							py={2}
							borderRadius='md'
							transition='background 0.3s ease'
							_hover={{ bg: 'teal.500' }}>
							Achievements
						</Text>
					</Link>
					<Link href='#certifications' _hover={{ textDecoration: 'none' }}>
						<Text
							color='white'
							fontSize='lg'
							fontWeight='bold'
							px={4}
							py={2}
							borderRadius='md'
							transition='background 0.3s ease'
							_hover={{ bg: 'teal.500' }}>
							Certifications
						</Text>
					</Link>
				</Flex>
			)}
		</Flex>
	);
};

export default Navbar;
