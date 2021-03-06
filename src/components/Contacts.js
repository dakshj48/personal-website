import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(.01),
    },
  },
  button: {
    textTransform: 'none'
  },
  table: {
    minWidth: 0,
  },
}));

const NoBorderTableCell = withStyles({
  root: {
    borderBottom: 'none',
  }
})(TableCell)

const Contacts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
      <Table className={classes.table} padding='checkbox'>
        <TableBody>
          <TableRow>
            <NoBorderTableCell align='center'>
              <a 
                href='https://www.linkedin.com/in/jain-daksh/' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{textDecoration: 'none'}}
              >
                <Button
                  color='default'
                  startIcon={<LinkedInIcon />}
                  className={classes.button}
                >
                  jain-daksh
                </Button>
              </a>
            </NoBorderTableCell>
            <NoBorderTableCell align='center'>
              <a 
                href='https://github.com/dakshj48' 
                target='_blank' 
                rel='noopener noreferrer'
                style={{textDecoration: 'none'}}
              >
                <Button
                  color='default'
                  startIcon={<GitHubIcon />}
                  className={classes.button}
                >
                  dakshj48
                </Button>
              </a>
            </NoBorderTableCell>
            <NoBorderTableCell align='center'>
              <a 
                href='mailto:dakshjain@umass.edu'
                style={{textDecoration: 'none'}}
              >
                <Button
                  color='default'
                  startIcon={<EmailIcon />}
                  className={classes.button}
                >
                  dakshjain@umass.edu
                </Button>
              </a>
            </NoBorderTableCell>
            <NoBorderTableCell align='center'>
              <a 
                href='tel:+13123699090'
                style={{textDecoration: 'none'}}
              >
                <Button
                  color='default'
                  startIcon={<PhoneIcon />}
                  className={classes.button}
                >
                  (312) 369-9090
                </Button>
              </a>
            </NoBorderTableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  )
}

export default Contacts;
