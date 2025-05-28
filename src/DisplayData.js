import React from 'react';
import data from './MOCK_DATA.json';  // Đảm bảo đường dẫn đúng

function DisplayData() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Giới tính</th>
            <th>Quốc gia</th>
            <th>IP</th>
            <th>Hiển thị</th>
            <th>Đã xóa</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
              <td>{user.ipAddress || '-'}</td>
              <td>{user.isDisplay ? '✅' : '❌'}</td>
              <td>{user.isDelete ? '🗑️' : '✔️'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
