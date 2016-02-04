import React from 'react';
import Head from '../head/head.jsx';
import Search from '../search/search.jsx';
import Category from '../category/category.jsx';

export default class Page extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <Search />
                {this.props.categories.map((category, i) => {
                    return <Category category={category} key={i}/>;
                })}
            </div>
        );
    }
}
