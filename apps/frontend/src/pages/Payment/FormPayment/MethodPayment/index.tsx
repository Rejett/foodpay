import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#424449',
    },
  },
})

export default function MethodPayment() {
  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleChange}
              aria-label='lab API tabs example'
              indicatorColor='primary'
            >
              <Tab label='Pagamento Online' value='1' style={{ color: 'white' }} />
              <Tab label='Pagamento em dinheiro' value='2' style={{ color: 'white' }} />
              <Tab label='Pagamento Cartão na entrega' value='3' style={{ color: 'white' }} />
            </TabList>
          </Box>
          <TabPanel value='1'>Item One</TabPanel>
          <TabPanel value='2'>Item Two</TabPanel>
          <TabPanel value='3'>Item Three</TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  )
}
