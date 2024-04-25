import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import pic1 from '../assets/profile1.jpg'
import pic2 from '../assets/profile2.jpg'


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Articles() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const articles = [
        {
            'index': 1,
            'title': 'Lorem ipsum dolor sit.',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde dicta repudiandae modi autem doloribus provident voluptatum facilis voluptatibus alias, at eveniet quo quos ad reprehenderit consequatur nam dolore ut libero iusto itaque magnam accusantium aspernatur! Repellat sint eius ad.',
            'author': 'Henry Mark',
            'degree': 'PhD',
            'profile': pic2
        },
        {
            'index': 2,
            'title': ' adipisicing elit. Illum unde dicta',
            'description': 'Lorem ipsum  voluptatum facilis voluptatibus alias, at eveniet quo quos ad reprehenderit consequatur nam dolore ut libero iusto itaque magnam accusantium aspernatur! Repellatdolor sit amet consectetur adipisicing elit. Illum unde dicta repudiandae modi autem doloribus provident  sint eius ad.',
            'author': 'Elbert Mark',
            'degree': 'PhD',
            'profile' : pic1
        },
    ]
    const news = [

        {
            'index': 2,
            'title': ' adipisicing elit. Illum unde dicta',
            'description': 'Lorem ipsum  voluptatum facilis voluptatibus alias, at eveniet quo quos ad reprehenderit consequatur nam dolore ut libero iusto itaque magnam accusantium aspernatur! Repellatdolor sit amet consectetur adipisicing elit. Illum unde dicta repudiandae modi autem doloribus provident  sint eius ad.',
            'author': 'Elbert Mark',
            'degree': 'PhD',
            'profile' : pic1
        },
        {
            'index': 1,
            'title': 'Lorem ipsum dolor sit.',
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum unde dicta repudiandae modi autem doloribus provident voluptatum facilis voluptatibus alias, at eveniet quo quos ad reprehenderit consequatur nam dolore ut libero iusto itaque magnam accusantium aspernatur! Repellat sint eius ad.',
            'author': 'Henry Mark',
            'degree': 'PhD',
            'profile': pic2
        },
        
    ]

    return (
        <>

            <div className='flex justify-center'>
                <Box sx={{ width: '80%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Articles" {...a11yProps(0)} />
                            <Tab label="News" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <section class="text-gray-600 overflow-hidden">
                            <div class="container px-5  mx-auto">
                                <div class="flex flex-wrap -m-12">
                                    {
                                        articles.map((items) => (
                                            <div class="p-12 md:w-1/2 flex flex-col items-start" key={items.id}>
                                                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs tracking-widest">Articles</span>
                                                <h2 class="sm:text-3xl text-2xl text-black  mt-4 mb-4">{items.title}</h2>
                                                <p class="leading-relaxed mb-8">{items.description}</p>
                                                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <a class="inline-flex items-center">
                                                    <img alt="blog" src={items.profile} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                    <span class="flex-grow flex flex-col pl-4">
                                                        <span class="title-font text-black ">{items.author}</span>
                                                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">{items.degree}</span>
                                                    </span>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <section class="text-gray-600 overflow-hidden">
                            <div class="container px-5  mx-auto">
                                <div class="flex flex-wrap -m-12">
                                {
                                        news.map((items) => (
                                            <div class="p-12 md:w-1/2 flex flex-col items-start" key={items.id}>
                                                <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs tracking-widest">NEWS</span>
                                                <h2 class="sm:text-3xl text-2xl text-black  mt-4 mb-4">{items.title}</h2>
                                                <p class="leading-relaxed mb-8">{items.description}</p>
                                                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                                    <a class="text-indigo-500 inline-flex items-center">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <a class="inline-flex items-center">
                                                    <img alt="blog" src={items.profile} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                                    <span class="flex-grow flex flex-col pl-4">
                                                        <span class="title-font text-black ">{items.author}</span>
                                                        <span class="text-gray-400 text-xs tracking-widest mt-0.5">{items.degree}</span>
                                                    </span>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                    </CustomTabPanel>
                </Box>
            </div>

        </>
    )
}

export default Articles