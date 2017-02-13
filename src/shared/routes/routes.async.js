import asyncRoute from './asyncRoute';

// Export all the routes wrapped in the asyncRoute component
export const Home = asyncRoute(() => System.import('../containers/Home'));
export const About = asyncRoute(() => System.import('../containers/About'));
export const Topics = asyncRoute(() => System.import('../containers/Topics'));
