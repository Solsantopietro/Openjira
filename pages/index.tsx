import type { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import EntryList from '@/components/ui/EntryList';
import { NewEntry } from '@/components/ui';

const HomePage: NextPage = () => {

  console.log(process.env.NEXT_PUBLIC_CLIENT_KEY)

  return (
    <Layout title='Home | openJira'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />
            <CardContent>
              <NewEntry/>
              <EntryList status='pending' />
            </CardContent>

          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En proceso' />
            <CardContent>
            <EntryList status='in-progress' />

            </CardContent>
          </Card>

        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            <CardContent>
            <EntryList status='finished' />

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default HomePage