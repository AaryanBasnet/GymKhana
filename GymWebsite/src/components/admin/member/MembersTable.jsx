import React from 'react'

function MembersTable() {
  return (
    <div>
      <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date of Birth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Membership Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {members?.map((member) => (
                <tr key={member.memberId}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.memberId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{member.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.phoneNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(new Date(member.dateOfBirth), "MM/dd/yyyy")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {member.membershipType.typeName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(new Date(member.membershipStartDate), "MM/dd/yyyy")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(new Date(member.membershipEndDate), "MM/dd/yyyy")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default MembersTable
