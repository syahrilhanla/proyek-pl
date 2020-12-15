import React from 'react';
import './Disposisi.css';

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

const DispositionTable = ({borrowingList}) => {
    return (
        <tr>
                <td>Tanggal </td>
                <td>Dekan </td>
                <td>11</td>
                <td>Wakil Dekan 2</td>
                <td>Paraf</td>
                </tr>
    )
}

const Details = () => {
    return (
            <table>
                <tr>
                    <td>
                        Tanggal Surat
                    </td>
                    <td>
                        : isi tanggal
                    </td>
                </tr>
                <tr>
                    <td>
                        No. Surat
                    </td>
                    <td>
                        : Tanggal Surat
                    </td>
                </tr>
                <tr>
                    <td>
                        Dari
                    </td>
                    <td>
                        : UPM FKIP ULM
                    </td>
                </tr>
                <tr>
                    <td>
                        Isi Ringkas
                    </td>
                    <td>
                        : Permohonan Peminjaman ruang 32
                    </td>
                </tr>
            </table>        
    )
}

export const Disposisi = () => {
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
            <table>
                <tr>
                    <td>Tgl. Terima</td>
                    <td>7-Des-20</td>
                    <td>Agenda No.</td>
                    <td>5624</td>
                </tr>
            </table>
        </div>

        <div className="status">
            <table>
                <tr>
                    <td>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">Male</label><br />
                    </td>
                    <td>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">Male</label><br />
                    </td>
                    <td>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">Male</label><br />
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
                    <th>Paraf</th>
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
