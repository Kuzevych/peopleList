import {connect} from "react-redux";
import {fetchPeoples} from "../../actions/fetchPeoples";
import {PeopleListController} from "./controller";

const mapStateToProps = (state) =>{
    return{
        peopleList: state.peopleList
    }
};

const mapDispatchToProps = {
    fetchList: fetchPeoples
};


export const PeopleListConnect = connect(mapStateToProps,mapDispatchToProps)(PeopleListController);


