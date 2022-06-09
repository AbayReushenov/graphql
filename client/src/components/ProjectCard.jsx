import { GiOpenBook } from "react-icons/gi";

export default function ProjectCard({ project }) {
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title'>{project.name}</h5>

            <a  href={`/projects/${project.id}`} data-toggle="tooltip" data-placement="top" title="Открыть">
            <GiOpenBook className='text-info' size='2em' />
            </a>
          </div>
          <p className='small'>
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
