import React from 'react';import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function PostsComponent({
    title,
    body
}) {
    return (
        <div style={{width: '100%'}}>
        <Card style={{margin: '20px', width: '45%', float: 'left', background: '#D8D4F2', height: '300px'}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                {title}
                </Typography>
                <Typography variant="body2" component="p">
                {body}
                </Typography>
            </CardContent>
        </Card>
        </div>
        // <div>
        //     <h2>{title}</h2>
        //     <p>{body}</p>
        // </div>
    )
}
