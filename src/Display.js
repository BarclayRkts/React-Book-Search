import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import './Display.css';


export default class Display extends Component {
    render() {
        let bookItems;
        if (this.props.books) {
        bookItems = this.props.books.map(book => {
            let id = book.id;
            let title = book.volumeInfo.title;
            let thumbnail = book.volumeInfo.imageLinks.thumbnail;
            let categories = book.volumeInfo.categories;
            let authors = book.volumeInfo.authors;
            let publisher = book.volumeInfo.publisher;
            let description = book.volumeInfo.description;
            let pageCount = book.volumeInfo.pageCount;
            let publishedDate = book.volumeInfo.publishedDate;
            let averageRating = book.volumeInfo.averageRating;
            return (
                <Card key={id}>
                    <Container>
                    <h3>{title}</h3>
                    <div>
                        <div> 
                            <img src={thumbnail} alt="presentation" />
                        </div>
                        <div>
                        <ListGroup>
                            <ListGroupItem><strong>Categories: </strong>{categories}</ListGroupItem>
                            <ListGroupItem><strong>Authors: </strong>{authors}</ListGroupItem>
                            <ListGroupItem><strong>Publisher: </strong>{publisher}</ListGroupItem>
                            <ListGroupItem><strong>Publish Date: </strong>{publishedDate}</ListGroupItem>
                            <ListGroupItem><strong>Page Count: </strong>{pageCount}</ListGroupItem>
                            <ListGroupItem><strong>Average Rating: </strong><span className="rating">{averageRating}</span></ListGroupItem>
                        </ListGroup>
                        </div>
                    </div>
                    <div>
                        <div>
                        <h3>Book Description</h3>
                            <div className='desc'>{description}</div>
                        <hr />
                        </div>
                    </div>
                    </Container>
                </Card>
                );
            });
            }
        return (
            <div className='containerDiv'>
                <div>
                {bookItems}
                </div>
            </div>
            );
    }
}
