import React from 'react';
import './styles.scss';
import {Spinner} from "../Spinner";

export const PeopleListView = ({
                                   isFetching,
                                   isFailedToFetch,
                                   list,
                                   activePageIndex,
                                   handleClick}) => {
    const renderBody = () => {
        const itemsPerPage = 5;
        const indexOfLastItem = (activePageIndex * itemsPerPage);
        const indexOfFirstItem = (indexOfLastItem - itemsPerPage);
        const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
        const renderedItems = currentItems.map((item, index) => {
            return (
                <li className='list-item list-group-item row' key={index}>
                    <div className='list-item__number col-1'>
                        <b>{item.id}</b><br/>
                    </div>
                    <div className='list-item__body col-11'>
                        <b>Name: </b>{item.name}<br/>
                        <b>Surname: </b>{item.surname}<br/>
                        <b>Description: </b>{item.desc}<br/>

                    </div>
                </li>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <div className='pages-item'
                     key={number}
                     id={number}
                     onClick={handleClick}
                >
                    {number}
                </div>
            );
        });

        if (isFetching) {
            return <Spinner/>
        }
        if (isFailedToFetch) {
            return <span>Failed to fetch peoples</span>
        }
        if (list.length === 0) {
            return <span>No Peoples</span>
        }
        if (list) {
            return (
                <div>
                    <div className='pages'>
                        {renderPageNumbers}
                    </div>
                    <ul className='list list-group'>
                        {renderedItems}
                    </ul>
                </div>
            )
        }
    };

    return (
        <div className="container">
            {renderBody()}
        </div>
    );
};

