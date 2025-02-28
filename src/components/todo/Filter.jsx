import React from 'react';
import '../../app.css'
import {useTodos} from "../../store.js";

const Filter = () => {
    const {filter, setFilter} = useTodos()
    return (
        <div className='filterContainer m-6 '>
            <h1>Filter</h1>
            <button disabled={filter === 'all'}
                    onClick={() => setFilter('all')}
            >All
            </button>
            <button disabled={filter === 'uncompleted'}
                    onClick={() => setFilter('uncompleted')}
            >Not completed
            </button>
            <button disabled={filter === 'completed'}
                    onClick={() => setFilter('completed')}
            >Completed
            </button>
        </div>
    );
};

export default Filter;