import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { routes } from 'src/routes';

const NavBar = () => {
  const route = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <Divider />
      <List>
        <ListItem
          button
          onClick={() => history.push(routes.USERS)}
          selected={route.path === routes.USERS}
        >
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem
          button
          onClick={() => history.push(routes.TODOS)}
          selected={route.path === routes.TODOS}
        >
          <ListItemIcon>
            <PlaylistAddCheck />
          </ListItemIcon>
          <ListItemText primary="To Do" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default NavBar;
