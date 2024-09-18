/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react';
import App from '../App';

describe('renders the app', () => {
  // Mock the fetch API used on the stats page and the about page.
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));

  // Mock the scrollTo API used when navigating to a new page.
  window.scrollTo = jest.fn();

  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Dinis Akulov');
  });

  it('can navigate to /about', async () => {
    const aboutLink = document.querySelector('#header > nav > ul > li:nth-child(1) > a');
    expect(aboutLink).toBeInTheDocument();
    await act(async () => {
      aboutLink.click();
    });
    expect(document.title).toContain('About |');
    expect(window.location.pathname).toBe('/about');
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(0);
    expect(textMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /resume', async () => {
    const resumeLink = document.querySelector('#header > nav > ul > li:nth-child(1) > a');
    expect(resumeLink).toBeInTheDocument();
    await act(async () => {
      resumeLink.click();
    });
    expect(document.title).toContain('Resume |');
    expect(window.location.pathname).toBe('/resume');
  });

  it('can navigate to /projects', async () => {
    const projectsLink = document.querySelector('#header > nav > ul > li:nth-child(2) > a');
    expect(projectsLink).toBeInTheDocument();
    await act(async () => {
      projectsLink.click();
    });
    expect(document.title).toContain('Projects |');
    expect(window.location.pathname).toBe('/projects');
  });

  it('can navigate to /stats', async () => {
    const statsLink = document.querySelector('#header > nav > ul > li:nth-child(4) > a');
    expect(statsLink).toBeInTheDocument();
    await act(async () => {
      statsLink.click();
    });
    expect(document.title).toContain('Stats |');
    expect(window.location.pathname).toBe('/stats');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(jsonMock).toHaveBeenCalledTimes(1);
  });

  it('can navigate to /contact', async () => {
    const contactLink = document.querySelector('#header > nav > ul > li:nth-child(3) > a');
    expect(contactLink).toBeInTheDocument();
    await act(async () => {
      contactLink.click();
    });
    expect(document.title).toContain('Contact |');
    expect(window.location.pathname).toBe('/contact');
  });
});
