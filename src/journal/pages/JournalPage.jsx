import { IconButton, Typography } from "@mui/material"
import JournalLayout from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/*<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae neque architecto totam enim, amet sit aliquid excepturi eius obcaecati optio saepe nihil veniam nam a voluptatem nobis rem distinctio soluta!*/}
        {/* <NothingSelectedView /> */}
        {/*</JournalLayout></Typography>*/}
        <NoteView />
        <IconButton
            size='large'
            sx={{
                  color:'white', 
                  backgroundColor:'error.main',
                  ':hover':{backgroundColor:'error.main', opacity: 0.9},
                  position: 'fixed',
                  right: 50,
                  bottom:50
                }}
        >
          <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>

      </JournalLayout>
    </>
  )
}
