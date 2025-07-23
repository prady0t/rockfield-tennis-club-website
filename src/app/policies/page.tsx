import { Container } from '@/components/Container'
import { Card } from '@/components/Card'

function ShieldCheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DocumentIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Policies() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Policies
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Important policies and information for Rockfield Tennis Club members and visitors.
          </p>
        </div>

        {/* Child Safety Team Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheckIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Child Safety Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <div className="flex flex-col items-center text-center">
                <img 
                  src={process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/dlp_officer.jpeg' : '/dlp_officer.jpeg'}
                  alt="Alannah Grace - Designated Liaison Person" 
                  className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
                />
                <Card.Title>Alannah Grace</Card.Title>
                <Card.Description>
                  <strong>Designated Liaison Person (DLP)</strong><br />
                  Phone: 083 068 7307<br />
                  Email: childprotection@rockfieldtennisclub.ie
                </Card.Description>
              </div>
            </Card>
            
            <Card>
              <div className="flex flex-col items-center text-center">
                <img 
                  src={process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/ShaneDalton.jpg' : '/ShaneDalton.jpg'}
                  alt="Shane Dalton - Child Protection Officer" 
                  className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
                />
                <Card.Title>Shane Dalton</Card.Title>
                <Card.Description>
                  <strong>Child Protection Officer (Male)</strong><br />
                  Phone: 086 717 9300<br />
                  Email: childprotection@rockfieldtennisclub.ie
                </Card.Description>
              </div>
            </Card>
            
            <Card>
              <div className="flex flex-col items-center text-center">
                <img 
                  src={process.env.NODE_ENV === 'production' ? '/rockfield-tennis-club-website/jean_ryan-scaled.jpg' : '/jean_ryan-scaled.jpg'}
                  alt="Jean Ryan - Child Protection Officer" 
                  className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
                />
                <Card.Title>Jean Ryan</Card.Title>
                <Card.Description>
                  <strong>Child Protection Officer (Female)</strong><br />
                  Phone: 086 378 5147<br />
                  Email: childprotection@rockfieldtennisclub.ie
                </Card.Description>
              </div>
            </Card>
          </div>
        </div>

        {/* Child Protection Policies Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <DocumentIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Child Protection Policies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1dw-1VYD-J7l4TMuUP6c1f7SF0kDYaZMY/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Children's Safeguarding and Reporting Policy 2023
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1TaODXdiSCb5OEfcuUpQd4lS3O5nogL7g/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Child Safeguarding Training Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1DFCje5KvIHsnPeTR-Mg5VcQwInKzJr_N/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Safeguarding Statement
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1ym1Q6SRs4XYSWmAiulymsWZ_VbaH4Wi5/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Missing Child Policy
                </a>
              </Card.Title>
            </Card>
          </div>
        </div>

        {/* Club Championships Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <DocumentIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Club Championships Conditions and Tournament Rules
            </h2>
          </div>
          
          <Card>
            <Card.Title>
              <a 
                href="https://drive.google.com/file/d/1GcrepWF2GIzh340fqUkKWhgzbzCvjjA1/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                Club Championships Tournament Rules
              </a>
            </Card.Title>
          </Card>
        </div>

        {/* Club Policy Documents Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <DocumentIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Club Policy Documents
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <Card.Title>
                <a 
                  href="http://rockfieldtennisclub.ie/wp-content/uploads/2023/03/Accident-Form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Accident Form
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="http://rockfieldtennisclub.ie/wp-content/uploads/2023/03/Adopted-Rockfield-TC-Constitution.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Adopted Rockfield Tennis Club Constitution
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="http://rockfieldtennisclub.ie/wp-content/uploads/2023/03/Adult-Supervision_Policy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Adult Supervision Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="http://rockfieldtennisclub.ie/wp-content/uploads/2023/03/Anti-Bullying-Policy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Anti Bullying Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="http://rockfieldtennisclub.ie/wp-content/uploads/2023/03/Child-Safeguarding-Statement_-March-2023.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Child Safeguarding Statement
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1eU5aihejZ-Ow1XXooYWOZ2tUuMe-iCZC/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Court Booking and Arrival Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="http://rockfieldtennisclub.ie/wp-content/uploads/2023/03/Recrutiment_Policy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Recruitment Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="http://rockfieldtennisclub.ie/wp-content/uploads/2023/03/Travel_Away-Policy.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Travel Away Policy
                </a>
              </Card.Title>
            </Card>
          </div>
        </div>

        {/* Codes of Conduct & Privacy Policies Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <DocumentIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Codes of Conduct & Privacy Policies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1Liwbb-rP9fqs8HplW9xHw8qf0PSMN025/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Codes of Conduct Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1dPmdNviAVygIL8YzJlV5HS5xBmG6aTea/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Photo & Video Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1wRGLEKT4AQ-iKdYqmIGgb3zNcWAdUFJF/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Conflict of Interests Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>Player Team and Spectator Etiquette</Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1dI5BFyqLgSCwQhf6tNPtdGnqoh9M0V6T/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Privacy Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1m5r8x267RV3JUUcNNegSMa9Dq2BjXWlk/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Social Media Policy
                </a>
              </Card.Title>
            </Card>
            <Card>
              <Card.Title>
                <a 
                  href="https://drive.google.com/file/d/1wq0cl7bY9ALw9b9dnMliu2fED_mSADw0/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Data Protection Policy
                </a>
              </Card.Title>
            </Card>
          </div>
        </div>

        {/* Financial Management Policies Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <DocumentIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Financial Management Policies
            </h2>
          </div>
          
          <Card>
            <Card.Title>
              <a 
                href="https://drive.google.com/file/d/1FCJ4YKGFOZrtCQDO2TB0J4JEJIDqxggk/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                Financial Management Policy
              </a>
            </Card.Title>
          </Card>
        </div>

        {/* Tennis & Coaching Committee Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <DocumentIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Tennis & Coaching Committee Terms of Reference and Policies
            </h2>
          </div>
          
          <Card>
            <Card.Title>
              <a 
                href="https://drive.google.com/file/d/1hz8Q0UT6QMBlrSTcu7UyiIjm561g9HbI/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 transition-colors"
              >
                Terms of Reference for Tennis and Coaching Committee
              </a>
            </Card.Title>
          </Card>
        </div>

        {/* Opening Hours Section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <ClockIcon className="h-8 w-8 text-teal-500" />
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              Opening Hours
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <Card.Title>Monday - Friday</Card.Title>
              <Card.Description>
                <span className="text-2xl font-bold text-teal-600">1pm - 9pm</span>
              </Card.Description>
            </Card>
            
            <Card>
              <Card.Title>Saturday - Sunday</Card.Title>
              <Card.Description>
                <span className="text-2xl font-bold text-teal-600">11am - 5pm</span>
              </Card.Description>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
} 