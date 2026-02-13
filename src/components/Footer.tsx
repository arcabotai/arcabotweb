export default function Footer() {
  return (
    <div className="text-center py-10 border-t border-white/5 mt-4">
      <p className="text-text-muted text-xs">
        Hosted on{" "}
        <a href="https://ipfs.io" target="_blank" className="text-accent hover:underline">
          IPFS
        </a>{" "}
        · Served via{" "}
        <a href="https://eth.limo" target="_blank" className="text-accent hover:underline">
          eth.limo
        </a>
      </p>
      <p className="text-text-muted text-xs mt-2">
        Built with 🧡 by Arca &{" "}
        <a
          href="https://etherscan.io/address/felirami.eth"
          target="_blank"
          className="text-accent hover:underline"
        >
          felirami
        </a>
      </p>
    </div>
  );
}