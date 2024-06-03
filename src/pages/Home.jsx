import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, TextField } from '@mui/material';

const Home = (props) => {
    const [collegeDetails, setCollegeDetails] = useState([]);
    const getOptionLabel = (option) => option.name;
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCollegeDetails();
    }, []);

    const fetchCollegeDetails = async () => {
        setLoading(true);
        const response = await fetch('http://universities.hipolabs.com/search');
        const data = await response.json();
        const uniqueCollegeDetails = removeDuplicateCollegeDetails(data);
        setCollegeDetails(uniqueCollegeDetails);
        setLoading(false);
    };

    const removeDuplicateCollegeDetails = (options) => {
        const uniqueSet = new Set(options.map((option) => option));
        return Array.from(uniqueSet);
    };

    const handleCollegeSelect = () => {
        if (props.selectedOption !== null) {
            navigate(`/university/${props.selectedOption.name}`);
        }
    }

    return (
        <div className='container'>
            <h2 className='title'>Welcome to College-Search Website</h2>
            {loading ? <p className='loader'>Loading....</p> : <Autocomplete
                value={props.selectedOption}
                onChange={(event, newValue) => { props.setSelectedOption(newValue) }}
                onSelect={handleCollegeSelect}
                id="controllable-states-demo"
                options={collegeDetails}
                getOptionLabel={getOptionLabel}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Search Colleges" />}
            />}
        </div>
    )
}

export default Home;