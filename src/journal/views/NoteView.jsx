import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'> 10 de Junio </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{p:2}}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1}}/>  
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField 
            type="text" 
            variant="filled" 
            fullWidth 
            placeholder="Ingrese un título" 
            label="Título" 
            sx={{boder:'none', mb:1}}    
        />

        <TextField 
            type="text" 
            variant="filled" 
            fullWidth 
            multiline
            placeholder="¿Qué sucedió en el día de hoy?" 
            minRows={5}
        />

        {/* Image gallery */}
        <ImageGallery />

      </Grid>
    </Grid>
  )
}

