import React, {Component} from 'react';
import {PeopleListView} from "./view";


export class PeopleListController extends Component {

    state = {
        activePageIndex: 0,
    };

    componentDidMount() {
        this.props.fetchList();
    }
    handleClick = (event) => {
        this.setState({
            activePageIndex: Number(event.target.id)
        })
    };

    render() {
        const {peopleList, fetchList} = this.props;

        return (
            <PeopleListView
                fetchList={fetchList}
                isFetching={peopleList.isFetching}
                isFailedToFetch={peopleList.isFailedToFetch}
                list={peopleList.values}
                activePageIndex={this.state.activePageIndex}
                handleClick={this.handleClick}
            />
        );
    }
}

