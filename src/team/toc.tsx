import React from "react";
import styled from "@emotion/styled";

const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem 0.35rem;
    background: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    &:focus {
      outline: none;
      border-bottom-color: red;
    }
`;

const TableOfContents = ({
    type = 'ALL', setType,
    team, setTeam = (_t) => {},
    keyword, setKeyword = (_k) => {},
    campus, setCampus = (_c) => {},
}) => (
<div className="mt-8 p-3 shadow">
    <div className="mb-8">
        <StyledInput
            placeholder="Search here"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
    </div>
    <div className="mb-8">
        <ul className="opacity-60 ">
            <li className="mb-2 shadow">
                {type ==='ALL' && <span>{'> '}</span>}
                <button onClick={() => setType('ALL')}>All Members</button>
            </li>
            <li className="mb-2 shadow shadow">
                {type ==='ADVISORS' && <span>{'> '}</span>}
                <button onClick={() => setType('ADVISORS')}>Team Advisors</button>
            </li>
            {/* <li className="mb-2 shadow">
                {type ==='STAFF' && <span>{'> '}</span>}
                <button onClick={() => setType('STAFF')}>Staff Mentors</button>
            </li> */}
            <li className="mb-2 shadow">
                {type ==='STUDENTS' && <span>{'> '}</span>}
                <button onClick={() => setType('STUDENTS')}>Student Members</button>
            </li>
            <li className="mb-2 shadow">
                {type ==='ALUMNI' && <span>{'> '}</span>}
                <button onClick={() => setType('ALUMNI')}>Alumni</button>
            </li>
        </ul>
    </div>
    <div className="mt-8 mb-6">
        <div className="font-semibold mb-2 ">
            By Team
        </div>
        <ul className="opacity-60">
            <li className="mb-2 shadow">
                {team ==='ALL' && <span>{'> '}</span>}
                <button onClick={() => setTeam('ALL')}>All Teams</button>
            </li>
            <li className="mb-2 shadow">
                {team ==='CTF' && <span>{'> '}</span>}
                <button onClick={() => setTeam('CTF')}>CTF</button>
            </li>
            <li className="mb-2 shadow">
                {team ==='Hardware' && <span>{'> '}</span>}
                <button onClick={() => setTeam('Hardware')}>Hardware</button>
            </li>
            <li className="mb-2 shadow">
                {team === 'Pentest' && <span>{'> '}</span>}
                <button onClick={() => setTeam('Pentest')}>Pentest</button>
            </li>
        </ul>
    </div>
    <div className="mt-8 mb-6">
        <div className="font-semibold mb-2">
            By Campus
        </div>
        <ul className="opacity-60">
            <li className="mb-2 shadow">
                {campus ==='ALL' && <span>{'> '}</span>}
                <button onClick={() => setCampus('ALL')}>All Campuses</button>
            </li>
            <li className="mb-2 shadow">
                {campus ==='AMRITAPURI' && <span>{'> '}</span>}
                <button onClick={() => setCampus('AMRITAPURI')}>Amritapuri</button>
            </li>
            <li className="mb-2 shadow">
                {campus ==='BENGALURU' && <span>{'> '}</span>}
                <button onClick={() => setCampus('BENGALURU')}>Bengaluru</button>
            </li>
            <li className="mb-2 shadow">
                {campus === 'COIMBATORE' && <span>{'> '}</span>}
                <button onClick={() => setCampus('COIMBATORE')}>Coimbatore</button>
            </li>
        </ul>
    </div>
</div>
);

export default TableOfContents;
