import React, {
    Component
} from "react";
import "./index.css";

class Pagination extends Component {
    constructor ( props ) {
        super(props);

        this.pagination = this.pagination.bind(this);
        this.previous = this.previous.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.state = {
            maxPage: props.maxPage || 7,
            current: props.current || 1
        };
    }
    pagination () {
        let items = [];
        let {
            maxPage,
            current
        } = this.state;

        items.push(<div
            className = { `components-pagination-item${ current <= 1 ? " components-pagination-item-disable" : "" }` }
            key = "pagination-item-left-arrow"
            onClick = { this.previous }>
            <div
                className = "components-pagination-item-main">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
            </div>
        </div>);

        for ( let i = 1; i < maxPage + 1; i++ ) {
            if ( Math.abs( i - current ) < 3 ||
                i === 1 || i === maxPage ||
                ( ( current - 1 < 2 || maxPage - current < 2 ) && 
                  ( Math.abs( current - i ) < ( 5 - current + 1 ) ||  
                    Math.abs( current - i ) < ( 5 - maxPage + current) ) ) ) {
                items.push(<div
                    className = { `components-pagination-item${ current === i ? " components-pagination-item-active" : "" }` }
                    key = { `pagination-item-${i}` }
                    onClick = { this.clickItem.bind(this, i) }>
                    <div
                        className = "components-pagination-item-main">
                        { i }
                    </div>
                </div>);
            }
        }

        if ( current > 4 ) {
            items.splice(2, 0, <div
                className = "components-pagination-item no-border components-pagination-item-disable"
                key = "previousMore">
                <span
                    className = "components-pagination-item-more"></span>
                <span
                    className = "components-pagination-item-more"></span>
                <span
                    className = "components-pagination-item-more"></span>
            </div>);
        }
        if ( current < maxPage - 3 ) {
            items.splice(items.length-1, 0, <div
                className = "components-pagination-item no-border components-pagination-item-disable"
                key = "nextMore">
                <span
                    className = "components-pagination-item-more"></span>
                <span
                    className = "components-pagination-item-more"></span>
                <span
                    className = "components-pagination-item-more"></span>
            </div>);
        }

        items.push(<div
            className = {`components-pagination-item${ current >= maxPage ? " components-pagination-item-disable" : "" }`}
            key = "pagination-item-right-arrow"
            onClick = { this.nextPage }>
            <div
                className = "components-pagination-item-main">
                <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
            </div>
        </div>)

        return items;
    }
    clickItem ( i ) {
        this.onChange(i);

        this.setState({
            current: i
        });
    }
    previous () {
        let {
            current
        } = this.state;

        if ( current > 1 ) {
            current --;

            this.onChange(current);

            this.setState({
                current
            });
        }
    }
    nextPage () {
        let {
            current,
            maxPage
        } = this.state;

        if ( current < maxPage + 1 ) {
            current ++;

            this.onChange(current);

            this.setState({
                current
            });
        }
    }
    onChange ( i ) {
        if ( !!this.props.onChange ) {
            this.props.onChange( i );
        }
    }
    render () {
        return <div
            className = { `components-pagination ${ this.props.className ? this.props.className : "" }` }>
            { this.pagination() }
        </div>;
    }
}

export default Pagination;
