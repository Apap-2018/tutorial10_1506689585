import React from 'react';
import { DaftarPasienRow } from '../components/DaftarPasienRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { DaftarStafFarmasiRow } from '../components/DaftarStafFarmasiRow';
import { Appointment } from '../utils/Appointment';

export class DaftarStafFarmasi extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listStafFarmasi: []
		}
		Appointment.getAllStaffFarmasi().then(response => {
			this.setState({
				loading: false,
				listStafFarmasi: response.result
			})
		})
	}
	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching the Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Staf Farmasi" header={['Nama Staf']}>
                    <DaftarStafFarmasiRow listStafFarmasi={this.state.listStafFarmasi}/>
                </TableContainer>
            )
        }
	}
}