import { useState } from "react";
import {
  AddBarang,
  EditBarang,
  ListBarang,
} from "../component/barang.component";

export const BarangManager = () => {
  const [daftarBarang, setDaftarBarang] = useState([]);
  const [barang, setBarang] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [currentID, setCurrentID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      let updateBarang = [...daftarBarang];
      updateBarang[currentID] = barang;
      setDaftarBarang(updateBarang);
      setIsEdit(false);
      setBarang({});
      setCurrentID(null);
    } else {
      // digunakan untuk menyimpan data
      setDaftarBarang((values) => [barang, ...values]);
      setBarang({});
    }
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const nilai = e.target.value;

    setBarang((values) => ({ ...values, [key]: nilai }));
    console.log(barang);
  };

  const getBarang = (barang, index) => {
    setBarang(barang);
    setIsEdit(true);
    setCurrentID(index);
  };

  const handleCancelEdit = (e) => {
    setIsEdit(false);
    setBarang({});
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            {isEdit ? (
              <EditBarang
                handleCancelEdit={handleCancelEdit}
                barang={barang}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            ) : (
              <AddBarang
                barang={barang}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
          <div className="col-md-8">
            <ListBarang getBarang={getBarang} daftarBarang={daftarBarang} />
          </div>
        </div>
      </div>
    </>
  );
};
