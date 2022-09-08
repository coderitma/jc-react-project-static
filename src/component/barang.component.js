export const AddBarang = (props) => {
  return (
    <div className="card shadow bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">Tambah Barang</h5>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Kode Barang</label>
            <input
              value={props.barang.kode || ""}
              onChange={props.handleChange}
              type="text"
              name="kode"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nama Barang</label>
            <input
              value={props.barang.nama || ""}
              onChange={props.handleChange}
              type="text"
              name="nama"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Lokasi Barang</label>
            <input
              value={props.barang.lokasi || ""}
              onChange={props.handleChange}
              type="text"
              name="lokasi"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stok Barang</label>
            <input
              value={props.barang.stok || ""}
              onChange={props.handleChange}
              type="number"
              name="stok"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export const ListBarang = (props) => {
  let counter = 0;
  return (
    <div className="card shadow bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">Daftar Barang</h5>
        <table className="table text-light">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama</th>
              <th>Lokasi</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            {props.daftarBarang.map((barang, i) => (
              <tr key={i} onClick={() => props.getBarang(barang, i)}>
                <td>{barang.kode}</td>
                <td>{barang.nama}</td>
                <td>{barang.lokasi}</td>
                <td>{barang.stok}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const EditBarang = (props) => {
  return (
    <div className="card shadow bg-dark text-light">
      <div className="card-body">
        <h5 className="card-title">Edit {props.barang.nama}</h5>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Kode Barang</label>
            <input
              value={props.barang.kode || ""}
              onChange={props.handleChange}
              type="text"
              name="kode"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nama Barang</label>
            <input
              value={props.barang.nama || ""}
              onChange={props.handleChange}
              type="text"
              name="nama"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Lokasi Barang</label>
            <input
              value={props.barang.lokasi || ""}
              onChange={props.handleChange}
              type="text"
              name="lokasi"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stok Barang</label>
            <input
              value={props.barang.stok || ""}
              onChange={props.handleChange}
              type="number"
              name="stok"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          &nbsp;
          <button
            onClick={props.handleCancelEdit}
            className="btn btn-secondary"
          >
            Cancel
          </button>
          &nbsp;
          <button onClick={props.handleRemove} className="btn btn-danger">
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};
