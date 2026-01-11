export default function NammaWallet() {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        lineHeight: 1.6,
        margin: '24px',
        color: '#222',
      }}
    >
      <h1 style={{ fontSize: '28px', marginBottom: '4px', color: '#111' }}>
        Privacy Policy – Namma Wallet (iOS)
      </h1>

      <div style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>
        <strong>Last Updated:</strong> 11-01-2026
      </div>

      <p>
        <strong>Namma Wallet</strong> (“we”, “our”, “the app”) is an open-source
        Flutter application built by the Flutter Chennai Community. The app helps
        users automatically create tickets or events by processing text and
        documents shared by the user.
      </p>

      <p>
        We care about your privacy and are committed to transparency in how the
        app works and what data it handles.
      </p>

      <h2 style={{ marginTop: '28px', fontSize: '22px' }}>
        1. Data Collection and Use
      </h2>

      <h3 style={{ marginTop: '20px', fontSize: '18px' }}>
        1.1 Shared Data (SMS, Text, and Documents)
      </h3>

      <ul style={{ marginLeft: '20px' }}>
        <li>The app does not have direct access to your SMS messages.</li>
        <li>It only processes content you explicitly share.</li>
        <li>All processing happens entirely on your device.</li>
        <li>
          <strong>No data is transmitted or stored externally.</strong>
        </li>
      </ul>

      <h3 style={{ marginTop: '20px', fontSize: '18px' }}>
        1.2 Camera and Photo Library Access
      </h3>

      <ul style={{ marginLeft: '20px' }}>
        <li>
          <strong>Camera:</strong> Used only to scan QR codes locally.
        </li>
        <li>
          <strong>Photo Library:</strong> Used to scan QR codes from saved images.
        </li>
        <li>No images or videos leave your device.</li>
      </ul>

      <h2 style={{ marginTop: '28px', fontSize: '22px' }}>
        2. No Data Leaves Your Device
      </h2>

      <ul style={{ marginLeft: '20px' }}>
        <li>All data stays on your device.</li>
        <li>No cloud, analytics, or tracking is used.</li>
        <li>No personal data is collected.</li>
      </ul>

      <h2 style={{ marginTop: '28px', fontSize: '22px' }}>
        3. Open Source Transparency
      </h2>

      <p>
        Source code is available at:{' '}
        <a
          href="https://github.com/Namma-Flutter/namma_wallet"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0066cc' }}
        >
          https://github.com/Namma-Flutter/namma_wallet
        </a>
      </p>

      <h2 style={{ marginTop: '28px', fontSize: '22px' }}>
        9. Contact Us
      </h2>

      <p>
        <strong>Flutter Chennai Community</strong>
        <br />
        GitHub:{' '}
        <a
          href="https://github.com/Namma-Flutter/namma_wallet"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0066cc' }}
        >
          https://github.com/Namma-Flutter/namma_wallet
        </a>
      </p>
    </div>
  );
}
