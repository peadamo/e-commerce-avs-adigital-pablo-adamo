import * as React from 'react';
import { useState, useContext } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Skeleton } from '@mui/material';
import { UserContext } from "../../../context/UserContext";

export default function UserFotoCard() {
  const user = useContext(UserContext);
  const [isImgLoad, setIsImgLoad] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      {isImgLoad ? null : (
                <Skeleton variant="rectangular" width={280} height={280} />
              )}
              <img
                src={user.user.imgSrc}
                width={280}
                height={280}
                alt={"user foto"}
                onLoad={() => setIsImgLoad(true)}
              />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
            UserName: {user.user.userName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Id de usuario: {user.user.id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
