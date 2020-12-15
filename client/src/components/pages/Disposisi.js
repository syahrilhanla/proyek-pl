import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../globalState/GlobalState';
import './Disposisi.css';

export const Disposisi = () => {

    const { getSpecificBorrowingData, specificBorrowingData } = useContext(GlobalContext);

    // get id from live url
    const id = window.location.href.slice(36, 60);

    useEffect(() => {
        getSpecificBorrowingData(id);
    }, []);
    
        const DispositionDataTable = ({ index, data} ) => {
        return (
            <tr>
                <td>
                    {index}
                </td>
                <td>
                    {data}
                </td>
            </tr>
            )
        }

        const DispositionTable = () => {
            const SwitchInput = () => {
                const options = ['Dekan', 'Wakil Dekan 1', 'Wakil Dekan 2', 'Wakil Dekan 3', 'Kasubag Umum'];

                return (
                    <>
                        <input
                            list="dari"
                            type="text"
                            placeholder="Pengirim..."
                            name="dari"
                            className="input-normal"
                        />
                        <datalist id="dari" >
                            {options.map(room => (
                                <option value={room} key={room} />
                            ))}
                        </datalist>
                    </>
                )
            }

            return (
                <tr>
                        <td>{specificBorrowingData.startDate}</td>
                        <td>
                            <SwitchInput />
                        </td>
                        <td>11</td>
                        <td>Wakil Dekan 2</td>
                        </tr>
            )
        }

        const Details = () => {
            return (
                    <table>
                        <tr>
                            <td className='long'>
                                Tanggal Surat
                            </td>
                            <td>
                                : {specificBorrowingData.startDate}
                            </td>
                        </tr>
                        <tr>
                            <td className='long'>
                                No. Surat
                            </td>
                            <td>
                                : Tanggal Surat
                            </td>
                        </tr>
                        <tr>
                            <td className='long'>
                                Dari
                            </td>
                            <td>
                                : {specificBorrowingData.name}
                            </td>
                        </tr>
                        <tr>
                            <td className='long'> 
                                Isi Ringkas
                            </td>
                            <td>
                                : {specificBorrowingData.usage}
                            </td>
                        </tr>
                    </table>        
            )
        }

        const Kop = () => {
            return (
                    <table>
                        <tr>
                            <td>Tanggal Terima</td>
                            <td>{specificBorrowingData.startDate}</td>
                            <td>Agenda No.</td>
                            <td>5624</td>
                        </tr>
                    </table>
            )
        }

    const dispositionData = [
        "Mohon Pertimbangan", "Mohon Pendapat", "Mohon Keputusan",
        "Mohon Petunjuk", "Mohon Saran", "Bicarakan",
        "Teliti/Ikuti Perkembangan", "Untuk Perhatian",
        "Siapkan Konsep", "Siapkan Laporan", "Untuk Diproses",
        "Selesaikan Sesuai Pembicaraan", "Edarkan",
        "Tik / Gandakan / Informasikan", "Arsip"
    ];    

    return (
        <div className="container-disposisi">

        <div className="header">
            <h2>KEMENTRIAN PENDIDIKAN DAN KEBUDAYAAN</h2>
            <h2>UNIVERSITAS LAMBUNG MANGKURAT</h2>
            <h2>FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN</h2>
        </div>

        <div className="title">
            <h2>LEMBAR DISPOSISI</h2>
        </div>

        <div className="kop">
            <Kop />
        </div>

        <div className="status">
            <table>
                <tr>
                    <td>
                        <input type="radio" id="Penting" name="Penting" value="Penting" />
                        <label htmlFor="Penting">Penting</label><br />
                    </td>
                    <td>
                        <input type="radio" id="Rahasia" name="gender" value="Rahasia" />
                        <label htmlFor="Rahasia">Rahasia</label><br />
                    </td>
                    <td>
                        <input type="radio" id="Segera" name="Segera" value="Segera" />
                        <label htmlFor="Segera">Segera</label><br />
                    </td>
                </tr>
            </table>
        </div>

        <div className="details">
            <Details />
        </div>

        <div className="tableInput">
            <table>
                <tr>
                    <th>Tanggal </th>
                    <th>Dari </th>
                    <th>Isi Disposisi</th>
                    <th>Kepada</th>
                </tr>
                <DispositionTable />
            </table>
        </div>

        <div className="addition">
            <table>
                <tr>
                    <th>Disposisi</th>
                    <th>:</th>
                </tr>
                {dispositionData.map((data, index) => (
                    <DispositionDataTable 
                        key={index} index={index+1}
                        data={data} />
                ))}
            </table>
        </div>

    </div>
    )
}
