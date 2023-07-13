import { useContext } from "react";
import { Drawer, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { MailOutlineOutlined } from "@mui/icons-material";
import { UIContext } from '../../context/ui/UIContext';

const menuItems: string[] = ['Inbox', 'Started', 'Send Email', 'Drafts']

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu }  = useContext(UIContext)

  return (

    <Drawer anchor='left'
      open={sidemenuOpen}
      onClose={closeSideMenu}
    >
      <Box sx={{ width: 250 }}>

        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>

    </Drawer>
  )
}