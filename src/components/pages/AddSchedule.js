import React, { useContext, useState } from 'react';
import { GlobalContext } from '../globalState/GlobalState';

const AddSchedule = () => {
    //CHECK EMPTY FIELDS
    const isEmpty = (fields) => {
        fields.forEach(field => {
            if (field == '') {
                console.log('ada field yang kosong');
                return true;
            } else {
                console.log('no EMPTY fields');
            }
        }
        );
    };

    // STATE
    const [usage, setUsage] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [ruangan, setRuangan] = useState('');
    const [awalPinjam, setAwal] = useState('');
    const [akhirPinjam, setAkhir] = useState('');

    let states = [usage, phoneNum, ruangan, awalPinjam, akhirPinjam];

    const handleSubmit = (e) => {
        e.preventDefault();
        isEmpty(states);
    }

    return (
        <div className="container">
            <h1>Peminjaman Baru</h1>
            <div className="form-control">
                <label htmlFor="noTelp"><h3>Nomor Telepon/WA</h3></label>
                <input
                    type="text"
                    placeholder="Masukkan Nomor Telepon/WA..."
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    className="input-normal"
                />
            </div>

            <div className="form-control">
                <label htmlFor="ruangan"><h3>Ruangan</h3></label>
                <input
                    list="ruangan"
                    type="text"
                    placeholder="Masukkan Ruangan..."
                    name="ruangan"
                    value={ruangan}
                    onChange={(e) => setRuangan(e.target.value)}
                    className="input-normal"
                />
                <datalist id="ruangan" >
                    <option value="Ruangan 1" />
                    <option value="Ruangan 2" />
                    <option value="Ruangan 3" />
                    <option value="Ruangan 4" />
                    <option value="Ruangan 5" />
                    <option value="Ruangan 6" />
                    <option value="Ruangan 7" />
                </datalist>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="keperluan"><h3>Keperluan</h3></label>
                    <input
                        type="text"
                        placeholder="Masukkan Keperluan..."
                        value={usage}
                        onChange={(e) => setUsage(e.target.value)}
                        className="input-normal"
                    />
                </div>

                <div className="form-control">
                    <label><h3>Waktu Peminjaman</h3></label><br />
                    <label htmlFor="mulai"><h4>Mulai</h4></label>
                    <input
                        type="datetime-local"
                        value={awalPinjam}
                        onChange={(e) => setAwal(e.target.value)}
                        className="input-normal"
                    />
                    <label htmlFor="sampai"><h4>Sampai</h4></label>
                    <input
                        type="datetime-local"
                        value={akhirPinjam}
                        onChange={(e) => setAkhir(e.target.value)}
                        className="input-normal"
                    />
                </div>

                <input type="submit" value="Ajukan Peminjaman" className="btn btn-primary" id='submit-btn' />

            </form>
        </div>
    )
}
export default AddSchedule;
