import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function UsersComponent({
    name,
    email,
    gender,
    status
}) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    {status}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {name}
                    </Typography>
                    <Typography color="textSecondary">
                    {gender}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {email}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
