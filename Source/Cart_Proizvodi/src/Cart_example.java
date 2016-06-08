import javax.swing.*; import javax.swing.event.*; 

import java.awt.*; import java.util.*; import java.io.*; import java.net.URL;

import javax.imageio.ImageIO;

public class Cart_example extends JApplet implements ListSelectionListener 
{
	JList ListProizvodi;
	JScrollPane scrollProizvodi;
	JLabel lblImage;
	ArrayList<String> proizvodi;
	Image image;

	@SuppressWarnings("unchecked")
	public void init() 
	{
		this.setSize(250, 200);
		proizvodi = new ArrayList<String>();
		proizvodi.add("LesPaul");
		proizvodi.add("Marshall");
		proizvodi.add("Telefon");
		this.setLayout(new GridLayout(2,1));
		ListProizvodi = new JList(proizvodi.toArray());
		ListProizvodi.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
		ListProizvodi.addListSelectionListener(this);
		ListProizvodi.setVisibleRowCount(10);
		scrollProizvodi = new JScrollPane(ListProizvodi);
		this.getContentPane().add(scrollProizvodi);
		lblImage = new JLabel();
		this.getContentPane().add(lblImage);
		this.setVisible(true);
	}

	public void valueChanged(ListSelectionEvent evt) 
	{
		if (evt.getValueIsAdjusting() == false) 
		{
			if (ListProizvodi.getSelectedIndex() != -1) 
			{
				image = null;
				int index = ListProizvodi.getSelectedIndex();
				//InputStream is = new BufferedInputStream(new FileInputStream("C:/Users/Filip/Downloads/E-Prodavnica/Boev_Filip_133086_Proekt_IP" + proizvodi.get(index) + ".jpg"));
				//URL url = new URL(getCodeBase(), "img/" + ListProizvodi.getSelectedIndex() + "ring.jpg");
				//URL url = new URL (getCodeBase(), "resources/" + proizvodi.get(index) + ".jpg");
				// image = ImageIO.read(is);
				Image image = getImage(getDocumentBase(), proizvodi.get(index) + ".png");
				//image = ImageIO.read(new File(proizvodi.get(index) + ".jpg"));
				System.out.println(image);
				System.out.println(prepareImage(image, 300, 400, this));
				Icon ic = new ImageIcon(image);
				lblImage.setIcon(ic);
				
			}
		}
	}
}
